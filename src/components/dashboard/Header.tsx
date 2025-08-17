import { Search, Plus, MessageCircle, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onCreatePin: () => void;
  onProfile: () => void;
  onLogout: () => void;
}

export const Header = ({ onCreatePin, onProfile, onLogout }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-primary/60 relative">
                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">vibeScape</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for inspiration..."
              className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-3">
          <Button
            onClick={onCreatePin}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create
          </Button>
          
          <Button variant="ghost" size="sm" className="hover:bg-accent">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm" className="hover:bg-accent">
            <MessageCircle className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onProfile}
            className="hover:bg-accent"
          >
            <User className="w-5 h-5" />
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={onLogout}
            className="border-border hover:bg-accent"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};