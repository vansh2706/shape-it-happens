import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Download, Share, User, Settings, Bell } from "lucide-react";

// All conditional logic patterns in one component
export const ConditionalExamples = () => {
  // State variables for conditions
  const [userStatus, setUserStatus] = useState<"guest" | "member" | "admin">("guest");
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLiked, setIsLiked] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  // Sample data array for loop conditions
  const items = [
    { id: 1, title: "Item 1", category: "work", priority: "high" },
    { id: 2, title: "Item 2", category: "personal", priority: "low" },
    { id: 3, title: "Item 3", category: "work", priority: "medium" },
  ];

  // Function with conditional logic
  const handleUserAction = () => {
    if (userStatus === "guest") {
      alert("Please login first");
    } else if (userStatus === "member") {
      alert("Member action performed");
    } else {
      alert("Admin privileges activated");
    }
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
    }`}>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 1. IF/ELSE STATEMENTS - Different content based on user status */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">1. If/Else Conditions</h2>
          
          <div className="flex gap-4 mb-4">
            <Button onClick={() => setUserStatus("guest")} variant="outline">Guest</Button>
            <Button onClick={() => setUserStatus("member")} variant="outline">Member</Button>
            <Button onClick={() => setUserStatus("admin")} variant="outline">Admin</Button>
          </div>

          {/* Conditional content rendering */}
          {userStatus === "guest" && (
            <div className="p-4 bg-yellow-100 text-yellow-800 rounded">
              <h3>Welcome Guest!</h3>
              <p>Please sign up to access premium features.</p>
            </div>
          )}

          {userStatus === "member" && (
            <div className="p-4 bg-blue-100 text-blue-800 rounded">
              <h3>Hello Member!</h3>
              <p>You have access to standard features.</p>
            </div>
          )}

          {userStatus === "admin" && (
            <div className="p-4 bg-green-100 text-green-800 rounded">
              <h3>Admin Dashboard</h3>
              <p>You have full access to all features.</p>
            </div>
          )}

          <Button onClick={handleUserAction} className="mt-4">
            Perform Action
          </Button>
        </Card>

        {/* 2. TERNARY OPERATORS - Conditional styling and content */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">2. Ternary Operators</h2>
          
          <div className="flex gap-4 mb-4">
            <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </Button>
            <Button onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
              {isLiked ? "Liked" : "Like"}
            </Button>
          </div>

          <div className={`p-4 rounded transition-colors ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}>
            <p>Current theme: {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}</p>
            <p>Status: {isLiked ? "❤️ You liked this!" : "👍 Click to like"}</p>
          </div>
        </Card>

        {/* 3. LOGICAL AND (&&) - Conditional rendering */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">3. Logical AND (&&) Conditions</h2>
          
          <div className="flex gap-4 mb-4">
            <Button onClick={() => setHasNotifications(!hasNotifications)}>
              {hasNotifications ? "Clear" : "Add"} Notifications
            </Button>
            <Button onClick={() => setShowModal(!showModal)}>
              {showModal ? "Hide" : "Show"} Modal
            </Button>
            <Button onClick={simulateLoading}>
              {isLoading ? "Loading..." : "Start Loading"}
            </Button>
          </div>

          {/* Conditional elements with && */}
          {hasNotifications && (
            <div className="p-3 bg-red-100 text-red-800 rounded mb-4 flex items-center">
              <Bell className="w-4 h-4 mr-2" />
              You have new notifications!
            </div>
          )}

          {isLoading && (
            <div className="p-4 bg-blue-100 text-blue-800 rounded mb-4">
              <div className="animate-pulse">Loading content...</div>
            </div>
          )}

          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md">
                <h3 className="text-lg font-bold mb-2">Modal Example</h3>
                <p className="text-gray-600 mb-4">This modal appears conditionally!</p>
                <Button onClick={() => setShowModal(false)}>Close</Button>
              </div>
            </div>
          )}
        </Card>

        {/* 4. LOOP CONDITIONS - Conditional rendering in lists */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">4. Loop with Conditions</h2>
          
          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border rounded">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    item.category === "work" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    {item.category}
                  </span>
                </div>
                
                {/* Conditional priority indicators */}
                <div className="flex items-center gap-2">
                  {item.priority === "high" && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                      🔥 High Priority
                    </span>
                  )}
                  {item.priority === "medium" && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      ⚡ Medium
                    </span>
                  )}
                  {item.priority === "low" && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                      📋 Low
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Conditional message when no items */}
          {items.length === 0 && (
            <p className="text-gray-500 text-center py-8">No items to display</p>
          )}
        </Card>

        {/* 5. HOVER CONDITIONS - Interactive states */}
        <Card 
          className="p-6 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 className="text-2xl font-bold mb-4">5. Hover Conditions</h2>
          
          <div className={`p-4 rounded transition-all duration-300 ${
            isHovered 
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105" 
              : "bg-gray-100 text-gray-800"
          }`}>
            {isHovered ? (
              <div>
                <h3>🎉 Hovered State!</h3>
                <p>This content changes when you hover over the card.</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="secondary">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h3>Regular State</h3>
                <p>Hover over this card to see the conditional content!</p>
              </div>
            )}
          </div>
        </Card>

        {/* 6. COMPLEX CONDITIONS - Multiple conditions combined */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">6. Complex Conditions</h2>
          
          <div className="flex gap-4 mb-4">
            <Input 
              type="number" 
              placeholder="Enter count"
              onChange={(e) => setItemsCount(parseInt(e.target.value) || 0)}
            />
          </div>

          {/* Multiple conditions combined */}
          {itemsCount > 0 && userStatus !== "guest" && (
            <div className="p-4 bg-green-100 text-green-800 rounded mb-4">
              ✅ You have {itemsCount} items and are logged in!
            </div>
          )}

          {itemsCount > 10 && userStatus === "admin" && (
            <div className="p-4 bg-purple-100 text-purple-800 rounded mb-4">
              👑 Admin with high activity: {itemsCount} items!
            </div>
          )}

          {(itemsCount === 0 || userStatus === "guest") && (
            <div className="p-4 bg-yellow-100 text-yellow-800 rounded">
              ⚠️ {itemsCount === 0 ? "No items yet" : "Please login"} 
              {itemsCount === 0 && userStatus === "guest" && " and add some items"}!
            </div>
          )}
        </Card>

      </div>
    </div>
  );
};