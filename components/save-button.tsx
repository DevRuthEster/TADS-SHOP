import { Loader2Icon, SaveIcon } from "lucide-react";
import { Button } from "./ui/button";

   type SaveButtonProsps = {
        isPeding?: boolean;
    }
export function SaveButton({isPeding}: SaveButtonProsps) {
 
    return (
        <>
            <Button type="submit">
                {isPeding ? <><Loader2Icon className="animation-spin" /> Aguarde... </> :
                    <><SaveIcon />Salvar</>}
            </Button>
        </>
    )
}
