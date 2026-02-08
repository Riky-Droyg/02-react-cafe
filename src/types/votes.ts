export interface Votes {
	good: number;
	neutral: number;
	bad: number;
}

export type VoteType = "good" | "neutral" | "bad";

export type VoteOptions = {
	onVote: (type: VoteType) => void;
	onReset: () => void;
	canReset: boolean;
};

