import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="बारे में" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
      यह गेम वर्डले का एक ओपन सोर्स क्लोन है -{' '}
        <a
          href="https://github.com/rajendraarora16/hindi-wordle"
          className="underline font-bold"
        >
          यहां कोड देखें
        </a>{' '}
        और{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          यहां मूल खेलें
        </a>
      </p>
    </BaseModal>
  )
}
