"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Search, Globe, Copy, Trash2, Edit } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

// Mock data for demonstration
const mockPasswords = [
  { id: 1, website: "example.com", username: "user1@example.com", password: "Password123!" },
  { id: 2, website: "github.com", username: "devuser", password: "GitHubPass456!" },
  { id: 3, website: "gmail.com", username: "user@gmail.com", password: "GmailSecure789!" },
]

export function PasswordList() {
  const [passwords, setPasswords] = useState(mockPasswords)
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePasswords, setVisiblePasswords] = useState<number[]>([])
  const { toast } = useToast()

  const togglePasswordVisibility = (id: number) => {
    setVisiblePasswords((prev) => (prev.includes(id) ? prev.filter((passId) => passId !== id) : [...prev, id]))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard.",
      duration: 2000,
    })
  }

  const deletePassword = (id: number) => {
    setPasswords((prev) => prev.filter((password) => password.id !== id))
    toast({
      title: "Password deleted",
      description: "The password has been deleted successfully.",
      duration: 2000,
    })
  }

  const filteredPasswords = passwords.filter(
    (password) =>
      password.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
      password.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search websites or usernames..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Website</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPasswords.length > 0 ? (
                filteredPasswords.map((password) => (
                  <TableRow key={password.id}>
                    <TableCell className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      {password.website}
                    </TableCell>
                    <TableCell>{password.username}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {visiblePasswords.includes(password.id) ? (
                          <span>{password.password}</span>
                        ) : (
                          <span>••••••••••</span>
                        )}
                        <Button variant="ghost" size="icon" onClick={() => togglePasswordVisibility(password.id)}>
                          {visiblePasswords.includes(password.id) ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => copyToClipboard(password.password)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deletePassword(password.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                    No passwords found. Add a new password to get started.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

