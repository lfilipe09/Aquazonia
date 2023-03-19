export type XProps = {
  dataTestId?: string
  className?: string
}

const X = ({ dataTestId, className }: XProps) => (
  <svg
    data-testid={dataTestId}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 25"
    className={className}
  >
    <path
      stroke="#fff"
      strokeWidth="2"
      d="m1.707 1.293 23 23M1.293 24.293l23-23"
    />
  </svg>
)

export default X
