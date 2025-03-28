'use client'

import { useState } from 'react'
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  ArrowRight,
  Calendar,
  CreditCard,
  DollarSign,
  Filter
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock transaction data
const transactions = [
  {
    id: 1,
    type: 'deposit',
    amount: 100.00,
    date: new Date(2025, 2, 20),
    status: 'completed',
    method: 'Credit Card',
    reference: 'DEP12345'
  },
  {
    id: 2,
    type: 'withdrawal',
    amount: 50.00,
    date: new Date(2025, 2, 15),
    status: 'completed',
    method: 'Bank Transfer',
    reference: 'WIT12345'
  },
  {
    id: 3,
    type: 'deposit',
    amount: 200.00,
    date: new Date(2025, 2, 10),
    status: 'completed',
    method: 'PayPal',
    reference: 'DEP12346'
  },
  {
    id: 4,
    type: 'bet-win',
    amount: 75.00,
    date: new Date(2025, 2, 5),
    status: 'completed',
    method: 'Contest Win',
    reference: 'WIN12345'
  },
  {
    id: 5,
    type: 'bet-loss',
    amount: 25.00,
    date: new Date(2025, 2, 1),
    status: 'completed',
    method: 'Bet Placement',
    reference: 'BET12345'
  }
]

export default function WalletPage() {
  const [balance] = useState(250.00)
  const [filter, setFilter] = useState('all')

  // Filter transactions based on selected filter
  const filteredTransactions = filter === 'all' 
    ? transactions
    : transactions.filter(t => t.type === filter)

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">My Wallet</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Balance Card */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-muted-foreground">Available Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
            <div className="flex items-center gap-4 mt-6">
              <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white flex-1">
                <Plus className="mr-2 h-4 w-4" /> Deposit
              </Button>
              <Button variant="outline" className="flex-1">
                <ArrowUpRight className="mr-2 h-4 w-4" /> Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick Actions Card */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4 text-[#ff5722]" />
                Payment Methods
              </span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4 text-[#ff5722]" />
                Bonus Balance
              </span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-[#ff5722]" />
                Betting History
              </span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Transactions Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Transaction History</CardTitle>
            <div className="flex items-center space-x-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="deposit">Deposits</SelectItem>
                  <SelectItem value="withdrawal">Withdrawals</SelectItem>
                  <SelectItem value="bet-win">Winnings</SelectItem>
                  <SelectItem value="bet-loss">Losses</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map(transaction => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-4 ${
                      transaction.type === 'deposit' || transaction.type === 'bet-win' 
                        ? 'bg-green-100' 
                        : 'bg-red-100'
                    }`}>
                      {transaction.type === 'deposit' || transaction.type === 'bet-win' ? (
                        <ArrowDownLeft className={`h-5 w-5 ${
                          transaction.type === 'deposit' || transaction.type === 'bet-win' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`} />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{
                        transaction.type === 'deposit' ? 'Deposit' :
                        transaction.type === 'withdrawal' ? 'Withdrawal' :
                        transaction.type === 'bet-win' ? 'Bet Win' : 'Bet Loss'
                      }</p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.date.toLocaleDateString()} • {transaction.method}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === 'deposit' || transaction.type === 'bet-win' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {transaction.type === 'deposit' || transaction.type === 'bet-win' ? '+' : '-'}
                      ${transaction.amount.toFixed(2)}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {transaction.reference}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No transactions found</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button variant="outline" className="w-full">Load More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}