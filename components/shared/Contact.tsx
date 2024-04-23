import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export function Contact() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" className="font-semibold text-md">
          Contact
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/assets/Logo.png" />
            <AvatarFallback>DM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Dream Employ</h4>
            <p className="text-sm">
              If you have any questions, feedback, or inquiries, feel free to
              reach out to us. We&#39;re here to help!
            </p>
            <div className="flex items-center pt-2">
              <Mail className="mr-2 h-4 w-4 opacity-70" />{" "}
              <Link href="mailto:dreamemploy@gmail.com" target="_blank">
                <span className="text-xs text-muted-foreground">
                  dreamemploy@gmail.com
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-2">
              <Instagram className="mr-2 h-4 w-4 opacity-70" />{" "}
              <Link href="/">
                <span className="text-xs text-muted-foreground">
                  dreamemploy
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-2">
              <Facebook className="mr-2 h-4 w-4 opacity-70" />{" "}
              <Link href="/">
                <span className="text-xs text-muted-foreground">
                  DreamEmploy
                </span>
              </Link>
            </div>
            <div className="flex items-center pt-2">
              <Linkedin className="mr-2 h-4 w-4 opacity-70" />{" "}
              <Link href="/">
                <span className="text-xs text-muted-foreground">
                  DreamEmploy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
