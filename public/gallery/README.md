# Gallery Images

This folder contains photos for the Gallery page.

## Folder Structure

Place your images in this directory with the following naming convention:

### Learning Photos
- `learning-1.jpg`
- `learning-2.jpg`
- `learning-3.jpg`
- `learning-4.jpg`
- etc.

### Certificate Photos
- `certificate-1.jpg`
- `certificate-2.jpg`
- `certificate-3.jpg`
- `certificate-4.jpg`
- etc.

## Image Requirements

- **Recommended size:** 1200x1200px or higher (square format)
- **File format:** JPG or PNG
- **File size:** Keep under 500KB per image for optimal performance
- **Aspect ratio:** Square (1:1) works best for the grid layout

## Adding More Images

1. Upload your images to this folder with the naming pattern above
2. Update the `learningPhotos` and `certificatePhotos` arrays in `app/gallery/page.tsx` to include new images
3. The images will automatically appear in the gallery

## Alternative: Using External Image Hosting

If you prefer using an external service:

1. **Cloudinary** (recommended): Free tier available, automatic image optimization
2. **Imgur**: Free image hosting
3. **AWS S3**: Scalable but requires setup

Update the image `src` paths in `app/gallery/page.tsx` to use the external URLs.
