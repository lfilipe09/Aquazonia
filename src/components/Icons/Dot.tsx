export type DotProps = {
  dataTestId?: string
  className?: string
}

const Dot = ({ dataTestId, className }: DotProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    data-testid={dataTestId}
    className={className}
  >
    <circle cx="9" cy="9" r="9" fill="inherit" />
  </svg>
)

export default Dot
