import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const revalidate = 0; // Dynamic route

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json({ items: [] });
    }

    const files = fs.readdirSync(galleryDir);
    
    // Valid extensions
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.mp4', '.webm'];

    // Map keywords to categories
    const getCategory = (filename) => {
      const lower = filename.toLowerCase();
      if (lower.includes('intern') || lower.includes('nic')) return 'internships';
      if (lower.includes('icpc') || lower.includes('award') || lower.includes('certificate') || lower.includes('winner') || lower.includes('winning')) return 'competitions';
      if (lower.includes('fast') || lower.includes('qau') || lower.includes('pucit') || lower.includes('metro') || lower.includes('research')) return 'university';
      if (lower.includes('colabs') || lower.includes('devsinc') || lower.includes('invozone') || lower.includes('entracloud') || lower.includes('pure logics') || lower.includes('programmer') || lower.includes('yieldwerx') || lower.includes('freelancer')) return 'professional';
      if (lower.includes('amnesty') || lower.includes('seminar') || lower.includes('palestine') || lower.includes('presentation')) return 'leadership';
      return 'memories';
    };

    // Format clean title from filename
    const formatTitle = (filename) => {
      let nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
      // Clean underscores and excess hyphens
      nameWithoutExt = nameWithoutExt.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
      
      // Fix typos or format cleanly
      nameWithoutExt = nameWithoutExt
        .replace(/Presinent/gi, 'President')
        .replace(/compay/gi, 'Company')
        .replace(/peojct/gi, 'Project')
        .replace(/Nationa/gi, 'National')
        .replace(/semicondotor/gi, 'Semiconductor');

      return nameWithoutExt;
    };

    const items = [];
    const seenFiles = new Set();

    files.forEach((file, index) => {
      const ext = path.extname(file).toLowerCase();
      if (!validExtensions.includes(ext)) return;

      const lowerName = file.toLowerCase();
      if (seenFiles.has(lowerName)) return;
      seenFiles.add(lowerName);

      const isVideo = ext === '.mp4' || ext === '.webm';
      const category = getCategory(file);
      const title = formatTitle(file);

      // Determine aspect ratio hint based on image naming or standard distribution
      // Default natural ratios will also be computed client-side
      let aspectHint = 'landscape';
      if (lowerName.includes('certificate') || lowerName.includes('offer_letter') || lowerName.includes('qau memory') || lowerName.includes('head palestine')) {
        aspectHint = 'portrait';
      } else if (lowerName.includes('award') || lowerName.includes('logo') || lowerName.includes('colabs.jpeg')) {
        aspectHint = 'square';
      }

      items.push({
        id: `g-${index}-${file.replace(/[^a-zA-Z0-9]/g, '')}`,
        filename: file,
        src: `/gallery/${encodeURIComponent(file)}`,
        title,
        category,
        isVideo,
        aspectHint,
        date: '2024 - 2026',
        location: lowerName.includes('lahore') ? 'Lahore, Pakistan' : lowerName.includes('islamabad') ? 'Islamabad, Pakistan' : lowerName.includes('fsd') ? 'Faisalabad, Pakistan' : 'Pakistan',
        description: `Memorable moment capturing ${title.toLowerCase()} as part of Bilal Ashiq's journey.`
      });
    });

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error scanning gallery directory:', error);
    return NextResponse.json({ error: 'Failed to read gallery images', items: [] }, { status: 500 });
  }
}
