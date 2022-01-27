import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="कैसे खेलें" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        6 कोशिशों में WORDLE का अनुमान लगाएं। प्रत्येक अनुमान के बाद, टाइल्स का रंग
          यह दिखाने के लिए बदल जाएगा कि आपका अनुमान शब्द के कितना करीब था।
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ब" status="correct" />
        <Cell value="ट" />
        <Cell value="न" />
      </div>
      <p className="text-sm text-gray-500">
        ब अक्षर शब्द में और सही जगह पर है।
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ख" />
        <Cell value="ब" status="present" />
        <Cell value="र" />
      </div>
      <p className="text-sm text-gray-500">
        ब अक्षर शब्द में है लेकिन गलत जगह पर है।      
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ब" />
        <Cell value="ट" />
        <Cell value="ल" status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        ल अक्षर किसी भी स्थान पर शब्द में नहीं है।
      </p>
    </BaseModal>
  )
}
