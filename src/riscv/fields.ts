/** Opcode field. */
export const OPCODE = { start: 0, mask: 0x7f };
/** Funct3 field. */
export const FUNCT3 = { start: 12, mask: 0x7 };
/** Funct5 field. */
export const FUNCT5 = { start: 27, mask: 0x1f };
/** Funct7 field. */
export const FUNCT7 = { start: 25, mask: 0x7f };
/** Funct2 field. */
export const FUNCT2 = { start: 25, mask: 0x3 };
/** Rd field. */
export const RD = { start: 7, mask: 0x1f };
/** Rs1 field. */
export const RS1 = { start: 15, mask: 0x1f };
/** Rs2 field. */
export const RS2 = { start: 20, mask: 0x1f };
/** Rs3 field. */
export const RS3 = { start: 27, mask: 0x1f };
/** Shamt field. */
export const SHAMT = { start: 20, mask: 0x1f };
/** Imm 11 0 field. */
export const IMM_11_0 = { start: 20, mask: 0xfff };
/** Imm 4 0 field. */
export const IMM_4_0 = { start: 7, mask: 0x1f };
/** Imm 11 5 field. */
export const IMM_11_5 = { start: 25, mask: 0x7f };
/** Imm 11b field. */
export const IMM_11B = { start: 7, mask: 0x1 };
/** Imm 4 1 field. */
export const IMM_4_1 = { start: 8, mask: 0xf };
/** Imm 10 5 field. */
export const IMM_10_5 = { start: 25, mask: 0x3f };
/** Imm 12 field. */
export const IMM_12 = { start: 31, mask: 0x1 };
/** Imm 31 12 field. */
export const IMM_31_12 = { start: 12, mask: 0xfffff };
/** Imm 19 12 field. */
export const IMM_19_12 = { start: 12, mask: 0xff };
/** Imm 11j field. */
export const IMM_11J = { start: 20, mask: 0x1 };
/** Imm 10 1 field. */
export const IMM_10_1 = { start: 21, mask: 0x3ff };
/** Imm 20 field. */
export const IMM_20 = { start: 31, mask: 0x1 };
/** Rm field. */
export const RM = { start: 12, mask: 0x7 };
/** Fmt field. */
export const FMT = { start: 25, mask: 0x3 };
