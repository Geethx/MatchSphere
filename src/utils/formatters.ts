export const formatScore = (
  homeScore: string | null,
  awayScore: string | null
): string => {
  if (!homeScore || !awayScore) return "VS";
  return `${homeScore} - ${awayScore}`;
};

export const formatPosition = (position: string): string => {
  const positionMap: Record<string, string> = {
    Forward: "FWD",
    Midfielder: "MID",
    Defender: "DEF",
    Goalkeeper: "GK",
  };
  return positionMap[position] || position;
};

export const formatCurrency = (
  amount: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US").format(num);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const formatHeight = (height: string): string => {
  // Convert cm to feet and inches
  const cm = parseInt(height);
  if (isNaN(cm)) return height;

  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  return `${feet}'${inches}" (${cm}cm)`;
};

export const formatWeight = (weight: string): string => {
  // Convert kg to lbs
  const kg = parseInt(weight);
  if (isNaN(kg)) return weight;

  const lbs = Math.round(kg * 2.20462);

  return `${kg}kg (${lbs}lbs)`;
};
