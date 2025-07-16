'use client'
import { DeleteButton } from "@/components/delete-button"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { Edit } from "lucide-react"
import Link from "next/link"

export type Marca = {
  id: string,
  nome: string
}

export const columns: ColumnDef<Marca>[] = [
  {
    accessorKey: "id",
    header: () => <div className="w-8">ID</div>,
    cell: ({row}) => {
      return (
        <div className="text-red-300">
          {row.getValue("id")}
        </div>
      )
    }
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const marca = row.original;
      return (
        <>

          <div className="flex gap-2">
            <Button size="icon" asChild>
              <Link href={`/cadastro/marcas/editar/${marca.id}`}><Edit /></Link>
            </Button>
            <DeleteButton id={marca.id} />
          </div>
        </>
      )
    }
  },

]