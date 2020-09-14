export function renderCircle(ctx, element, filled) {
  if (filled) {
    ctx.clearRect(
      element.x - element.radius - 1,
      element.y - element.radius - 1,
      element.radius * 2 + 2,
      element.radius * 2 + 2
    );
  }
  ctx.beginPath();
  ctx.arc(
    element.x,
    element.y,
    element.radius,
    element.startAngle,
    element.endAngle,
    element.antiClockwise
  );
  if (!filled) {
    ctx.fillStyle = "orange";
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
