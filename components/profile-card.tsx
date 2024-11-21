"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
          <p className="text-sm text-muted-foreground">Computer Science Student</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Badges</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary">Dean's List</Badge>
                <Badge variant="secondary">Hackathon Winner</Badge>
                <Badge variant="secondary">Top Contributor</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Node.js</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}