export type HamburgerMenuProps = {
  dataTestId?: string
  className?: string
}

const HamburgerMenu = ({ dataTestId, className }: HamburgerMenuProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    data-testid={dataTestId}
    className={className}
  >
    <rect width="50" height="50" rx="7" fill="#0A4262" />
    <path
      stroke="#83D1BF"
      strokeWidth="2"
      d="M11.207 14.518h26.724M11.207 24.863h26.724M11.207 35.207h26.724"
    />
  </svg>
)

export default HamburgerMenu
