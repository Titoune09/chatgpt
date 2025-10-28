import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export function MasonryLayout({ items }: { items: React.ReactNode[] }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1280: 3 }}>
      <Masonry gutter="1.5rem">{items.map((item, index) => <div key={index}>{item}</div>)}</Masonry>
    </ResponsiveMasonry>
  );
}
