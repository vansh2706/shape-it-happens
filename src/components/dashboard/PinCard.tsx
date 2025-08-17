import { useState } from "react";
import { Heart, Download, Share, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Pin {
  id: string;
  title: string;
  image: string;
  author: string;
  likes: number;
  isLiked: boolean;
}

interface PinCardProps {
  pin: Pin;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
}

export const PinCard = ({ pin, onLike, onSave }: PinCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden rounded-2xl bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image */}
        <img
          src={pin.image}
          alt={pin.title}
          className={`w-full h-auto object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="w-full h-64 bg-muted animate-pulse" />
        )}

        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300">
            {/* Top actions */}
            <div className="absolute top-3 right-3 flex space-x-2">
              <Button
                size="sm"
                onClick={() => onSave(pin.id)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Save
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white text-black"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Bottom actions */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => onLike(pin.id)}
                  className="bg-white/90 hover:bg-white text-black"
                >
                  <Heart 
                    className={`w-4 h-4 ${pin.isLiked ? 'fill-red-500 text-red-500' : ''}`} 
                  />
                  <span className="ml-1">{pin.likes}</span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white text-black"
                >
                  <Share className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white text-black"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pin info */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
          {pin.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          by {pin.author}
        </p>
      </div>
    </Card>
  );
};