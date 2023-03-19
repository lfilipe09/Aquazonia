export type HorizontalCurvedLineProps = {
  className?: string
  dataTestId: string
}

const HorizontalCurvedLine = ({
  className,
  dataTestId
}: HorizontalCurvedLineProps) => (
  <>
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2371 70"
      className={`${className} small-hide`}
      data-testid={dataTestId}
    >
      <path
        d="M76 4h243.7c30 0 31 16 31 31s-1 31 31 31H2447"
        transform="translate(-76)"
        style={{ fill: 'none', stroke: '#83d1bf', strokeWidth: '8px' }}
      />
    </svg>
    <svg
      className={`${className} medium-hide`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 390 22"
    >
      <path
        d="M0 4h43.25c7.43 0 7.677 3.613 7.677 7s-.248 7 7.676 7H390"
        stroke="#83D1BF"
        strokeWidth="8"
      />
    </svg>
  </>
)

export default HorizontalCurvedLine
