export default function stripEnds(
  s: string,
  prefix: string,
  suffix: string
): string {
  return s.replace(new RegExp(`[${prefix}${suffix}]`, 'gi'), '');
}
