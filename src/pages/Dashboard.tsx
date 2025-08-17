import { useState } from "react";
import { Header } from "@/components/dashboard/Header";
import { PinterestGrid } from "@/components/dashboard/PinterestGrid";
import { CreatePinModal } from "@/components/dashboard/CreatePinModal";

interface Pin {
  id: string;
  title: string;
  image: string;
  author: string;
  likes: number;
  isLiked: boolean;
}

interface DashboardProps {
  onLogout: () => void;
}

// Sample pins data
const initialPins: Pin[] = [
  {
    id: "1",
    title: "Mountain Landscape at Sunrise",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    author: "Nature Explorer",
    likes: 234,
    isLiked: false,
  },
  {
    id: "2",
    title: "Minimalist Kitchen Design",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "Design Studio",
    likes: 189,
    isLiked: true,
  },
  {
    id: "3",
    title: "Cozy Reading Nook Ideas",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Interior Lover",
    likes: 156,
    isLiked: false,
  },
  {
    id: "4",
    title: "Abstract Art Collection",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    author: "Art Curator",
    likes: 298,
    isLiked: false,
  },
  {
    id: "5",
    title: "Travel Photography Tips",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80",
    author: "Wanderlust",
    likes: 445,
    isLiked: true,
  },
  {
    id: "6",
    title: "Healthy Recipe Ideas",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    author: "Chef Anna",
    likes: 321,
    isLiked: false,
  },
  {
    id: "7",
    title: "Fashion Style Guide",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "Style Maven",
    likes: 567,
    isLiked: false,
  },
  {
    id: "8",
    title: "Garden Design Inspiration",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: "Green Thumb",
    likes: 223,
    isLiked: true,
  },
];

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [pins, setPins] = useState<Pin[]>(initialPins);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleLike = (id: string) => {
    setPins(pins.map(pin => 
      pin.id === id 
        ? { 
            ...pin, 
            isLiked: !pin.isLiked, 
            likes: pin.isLiked ? pin.likes - 1 : pin.likes + 1 
          }
        : pin
    ));
  };

  const handleSave = (id: string) => {
    // In a real app, this would save to user's boards
    console.log("Saving pin:", id);
  };

  const handleCreatePin = (pinData: { title: string; description: string; image: string }) => {
    const newPin: Pin = {
      id: Date.now().toString(),
      title: pinData.title,
      image: pinData.image,
      author: "You",
      likes: 0,
      isLiked: false,
    };
    
    setPins([newPin, ...pins]);
  };

  const handleProfile = () => {
    // In a real app, this would navigate to profile page
    console.log("Opening profile");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCreatePin={() => setIsCreateModalOpen(true)}
        onProfile={handleProfile}
        onLogout={onLogout}
      />
      
      <main>
        <PinterestGrid 
          pins={pins}
          onLike={handleLike}
          onSave={handleSave}
        />
      </main>

      <CreatePinModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePin}
      />
    </div>
  );
};