"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../src/lib/utils"
import { Button } from "../../src/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../src/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../src/components/ui/popover"

const frameworks = [
    {
      value: "Kochi",
      label: "Kochi",
    },
    {
      value: "Downtown",
      label: "Downtown",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Mumbai",
      label: "Mumbai",
    },
    {
      value: "Delhi",
      label: "Delhi",
    },
  ]

export function MovieCity({modifyCity,value}:{value:string,modifyCity:(val:string) => void}) {
  const [open, setOpen] = useState(false)
  //const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-black"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Choose City"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search City..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    modifyCity(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
