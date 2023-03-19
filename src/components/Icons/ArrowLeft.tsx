export type ArrowLeftProps = {
  dataTestId?: string
}

const ArrowLeft = ({ dataTestId }: ArrowLeftProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 16"
    data-testid={dataTestId}
    width="25"
    height="15"
  >
    <path d="M8.937.46 1 8l7.937 7.54M1.398 8h24.604" stroke="#0A4262" />
  </svg>
)

export default ArrowLeft
