import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";


import { QueryProvider } from "@/components/components/providers/query-provider";
import { ModalProvider } from "@/components/components/providers/modal-provider";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
