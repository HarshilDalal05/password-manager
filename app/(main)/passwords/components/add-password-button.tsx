"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function AddPasswordButton() {
  const [open, setOpen] = useState(false)
  const [website, setWebsite] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically save the password to your database
    // For now, we'll just show a toast
    toast({
      title: "Password saved",
      description: "Your password has been securely saved.",
      duration: 3000,
    })

    // Reset form and close dialog
    setWebsite("")
    setUsername("")
    setPassword("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Password</DialogTitle>
            <DialogDescription>Enter the details of the website password you want to save.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="example.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username/Email</Label>
              <Input
                id="username"
                placeholder="user@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Password</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

