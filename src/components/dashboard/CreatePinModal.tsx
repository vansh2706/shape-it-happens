import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X } from "lucide-react";

interface CreatePinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (pinData: { title: string; description: string; image: string }) => void;
}

export const CreatePinModal = ({ isOpen, onClose, onSubmit }: CreatePinModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleImageUrl = (url: string) => {
    setImageUrl(url);
    setPreviewImage(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && imageUrl) {
      onSubmit({
        title,
        description,
        image: imageUrl,
      });
      // Reset form
      setTitle("");
      setDescription("");
      setImageUrl("");
      setPreviewImage("");
      onClose();
    }
  };

  const sampleImages = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create a new Pin</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image upload/preview */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Image</label>
            
            {previewImage ? (
              <div className="relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    setPreviewImage("");
                    setImageUrl("");
                  }}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white text-black"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Add an image URL or choose from samples</p>
                
                <Input
                  type="url"
                  placeholder="Paste image URL here..."
                  value={imageUrl}
                  onChange={(e) => handleImageUrl(e.target.value)}
                  className="mb-4 bg-input border-border"
                />
                
                <div className="grid grid-cols-2 gap-2">
                  {sampleImages.map((url, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleImageUrl(url)}
                      className="aspect-video rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={url}
                        alt={`Sample ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Title *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your pin a title"
              required
              className="bg-input border-border text-foreground"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell people what your pin is about"
              rows={3}
              className="bg-input border-border text-foreground resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-border hover:bg-accent"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={!title || !imageUrl}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Create Pin
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};