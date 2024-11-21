"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const feedData = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Computer Science Professor",
    },
    content: "Just published a new research paper on AI Ethics! Check it out on the university repository.",
    type: "academic",
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Alumni - Software Engineer at Google",
    },
    content: "Excited to announce that we're hiring summer interns! DM me for details.",
    type: "career",
    likes: 89,
    comments: 34,
  },
];

export function FeedSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPosts = activeTab === "all" 
    ? feedData 
    : feedData.filter(post => post.type === activeTab);

  return (
    <Card>
      <CardHeader>
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {filteredPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{post.author.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {post.author.role}
                        </p>
                      </div>
                      <p className="mt-2">{post.content}</p>
                      <div className="mt-4 flex space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="mr-2 h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}