import { Loader2Icon, SaveIcon } from "lucide-react";
import { Button } from "./ui/button";

type SaveButtonProps = {
    isPending: boolean;
}
export function SaveButton({isPending}: SaveButtonProps) {
   
    return (
        <>
            <Button type="submit">
                {isPending ?
                    <><Loader2Icon className="animate-spin" />Aguarde...</> :
                    <><SaveIcon />Salvar</>}
            </Button>
        </>
    )
}