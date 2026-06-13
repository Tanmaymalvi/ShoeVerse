import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
  return <Toaster position="top-right" toastOptions={{ duration: 2200, style: { borderRadius: 8, fontWeight: 600 } }} />
}
