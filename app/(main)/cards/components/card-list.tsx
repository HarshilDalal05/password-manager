"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Search, Copy, Trash2, Edit, CreditCard } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock data for demonstration
const mockCards = [
  {
    id: 1,
    cardName: "John Doe",
    cardNumber: "4111111111111111",
    expiryDate: "12/25",
    cvv: "123",
    cardType: "Visa",
    color: "bg-gradient-to-r from-blue-500 to-purple-500",
  },
  {
    id: 2,
    cardName: "Jane Smith",
    cardNumber: "5555555555554444",
    expiryDate: "10/24",
    cvv: "321",
    cardType: "Mastercard",
    color: "bg-gradient-to-r from-red-500 to-orange-500",
  },
  {
    id: 3,
    cardName: "Alex Johnson",
    cardNumber: "3782822463100005",
    expiryDate: "08/26",
    cvv: "456",
    cardType: "American Express",
    color: "bg-gradient-to-r from-green-500 to-teal-500",
  },
]

export function CardList() {
  const [cards, setCards] = useState(mockCards)
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: { number: boolean; cvv: boolean } }>({})
  const { toast } = useToast()

  const toggleCardNumberVisibility = (id: number) => {
    setVisibleCards((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        number: !prev[id]?.number,
      },
    }))
  }

  const toggleCvvVisibility = (id: number) => {
    setVisibleCards((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        cvv: !prev[id]?.cvv,
      },
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard.",
      duration: 2000,
    })
  }

  const deleteCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id))
    toast({
      title: "Card deleted",
      description: "The card has been deleted successfully.",
      duration: 2000,
    })
  }

  const formatCardNumber = (number: string, visible: boolean) => {
    if (visible) {
      return number.match(/.{1,4}/g)?.join(" ") || number
    }
    return "•••• •••• •••• " + number.slice(-4)
  }

  const filteredCards = cards.filter(
    (card) =>
      card.cardName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.cardType.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search cards..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card key={card.id} className="overflow-hidden">
              <div className={`${card.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm opacity-80">Card</p>
                    <h3 className="font-bold">{card.cardType}</h3>
                  </div>
                  <CreditCard className="h-8 w-8" />
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-lg tracking-wider">
                      {formatCardNumber(card.cardNumber, !!visibleCards[card.id]?.number)}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white h-6 w-6"
                      onClick={() => toggleCardNumberVisibility(card.id)}
                    >
                      {visibleCards[card.id]?.number ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-80">Card Holder</p>
                    <p className="font-medium">{card.cardName}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80">Expires</p>
                    <p className="font-medium">{card.expiryDate}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">CVV:</p>
                    <div className="flex items-center">
                      {visibleCards[card.id]?.cvv ? <span className="font-mono">{card.cvv}</span> : <span>•••</span>}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => toggleCvvVisibility(card.id)}
                      >
                        {visibleCards[card.id]?.cvv ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(card.cardNumber)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteCard(card.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No cards found. Add a new card to get started.
          </div>
        )}
      </div>
    </div>
  )
}

