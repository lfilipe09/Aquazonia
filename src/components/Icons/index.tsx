export type ArrowProps = {
  dataTestId?: string
}

const Arrow = ({ dataTestId }: ArrowProps) => (
  <svg
    width="12"
    height="21"
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={dataTestId}
  >
    <path d="M1 1L10 10.5L1 20" stroke="#0A4262" strokeWidth="2" />
  </svg>
)

export default Arrow
