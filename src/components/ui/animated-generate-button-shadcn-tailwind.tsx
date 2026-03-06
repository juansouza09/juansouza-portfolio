import * as React from "react";
import clsx from "clsx";
import { Sparkles } from "lucide-react";

export type AnimatedGenerateButtonProps = {
  className?: string;
  buttonClassName?: string;
  labelIdle?: string;
  labelActive?: string;
  generating?: boolean;
  minimal?: boolean;
  showIcon?: boolean;
  clickAnimationMs?: number;
  highlightHueDeg?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
};

export default function AnimatedGenerateButton({
  className,
  buttonClassName,
  labelIdle = "Generate",
  labelActive = "Generating",
  generating,
  minimal = false,
  showIcon = true,
  clickAnimationMs = 900,
  highlightHueDeg = 210,
  onClick,
  type = "button",
  disabled = false,
  id,
  ariaLabel,
}: AnimatedGenerateButtonProps) {
  const [internalGenerating, setInternalGenerating] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);
  const isControlled = typeof generating === "boolean";
  const isGenerating = isControlled ? Boolean(generating) : internalGenerating;

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isControlled) {
      setInternalGenerating(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setInternalGenerating(false);
      }, clickAnimationMs);
    }
    onClick?.(e);
  };

  return (
    <div className={clsx("relative inline-block", className)} id={id}>
      <button
        type={type}
        aria-label={ariaLabel || (isGenerating ? labelActive : labelIdle)}
        aria-pressed={isGenerating}
        disabled={disabled}
        onClick={handleClick}
        className={clsx(
          "ui-anim-btn",
          "relative flex cursor-pointer select-none items-center justify-center rounded-[24px] px-4 py-2",
          minimal
            ? [
                "ui-anim-btn-minimal border border-border bg-transparent text-foreground shadow-none",
                "transition-[border,background-color] duration-300 hover:bg-accent hover:border-primary",
                "dark:border-white/35 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/55",
                "[&::before]:hidden [&::after]:hidden",
              ]
            : [
                "bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",
                "border border-[hsl(var(--border))]/20",
                "shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2),inset_0px_2px_2px_rgba(255,255,255,0.15),inset_0px_4px_4px_rgba(255,255,255,0.1),inset_0px_8px_8px_rgba(255,255,255,0.05),inset_0px_16px_16px_rgba(255,255,255,0.05),0_-1px_1px_rgba(0,0,0,0.02),0_-2px_2px_rgba(0,0,0,0.03),0_-4px_4px_rgba(0,0,0,0.05),0_-8px_8px_rgba(0,0,0,0.06),0_-16px_16px_rgba(0,0,0,0.08)]",
                "transition-[box-shadow,border,background-color] duration-[400ms]",
              ],
          buttonClassName
        )}
        style={
          {
            "--highlight-hue": `${highlightHueDeg}deg`,
          } as React.CSSProperties
        }
      >
        {showIcon && (
          <Sparkles
            className={clsx(
              "ui-anim-btn-svg mr-2 h-5 w-5 flex-grow-0",
              "text-[color:var(--ui-anim-svg-fill)]",
              "transition-[color,filter,opacity] duration-[400ms]"
            )}
            aria-hidden="true"
          />
        )}

        <div className="ui-anim-txt-wrapper relative flex min-w-[6.4em] items-center justify-center">
          <div
            className={clsx(
              "ui-anim-txt-1 absolute inset-0 flex items-center justify-center",
              isGenerating ? "opacity-0" : "animate-[ui-appear_1s_ease-in-out_forwards]"
            )}
          >
            {Array.from(labelIdle).map((ch, i) => (
              <span
                key={i}
                className="ui-anim-letter inline-block whitespace-pre"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {ch}
              </span>
            ))}
          </div>

          <div
            className={clsx(
              "ui-anim-txt-2 absolute inset-0 flex items-center justify-center",
              isGenerating ? "opacity-100" : "opacity-0"
            )}
          >
            {Array.from(labelActive).map((ch, i) => (
              <span
                key={i}
                className="ui-anim-letter inline-block whitespace-pre"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {ch}
              </span>
            ))}
          </div>

          <span className="select-none opacity-0">
            {labelIdle.length >= labelActive.length ? labelIdle : labelActive}
          </span>
        </div>
      </button>
    </div>
  );
}
