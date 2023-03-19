export type PlusProps = {
  dataTestId?: string
}

const Plus = ({ dataTestId }: PlusProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    data-testid={dataTestId}
  >
    <circle cx="14.5" cy="14.5" r="14.5" fill="#83D1BF" />
    <path
      d="M23.082 14.203H6.511M14.8 22.49V5.92"
      stroke="#fff"
      strokeWidth="2"
    />
  </svg>
)

export default Plus
