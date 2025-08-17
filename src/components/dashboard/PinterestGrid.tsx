import { PinCard } from "./PinCard";

interface Pin {
  id: string;
  title: string;
  image: string;
  author: string;
  likes: number;
  isLiked: boolean;
}

interface PinterestGridProps {
  pins: Pin[];
  onLike: (id: string) => void;
  onSave: (id: string) => void;
}

export const PinterestGrid = ({ pins, onLike, onSave }: PinterestGridProps) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 px-4 py-6 max-w-7xl mx-auto">
      {pins.map((pin) => (
        <div key={pin.id} className="break-inside-avoid mb-4">
          <PinCard 
            pin={pin} 
            onLike={onLike} 
            onSave={onSave}
          />
        </div>
      ))}
    </div>
  );
};