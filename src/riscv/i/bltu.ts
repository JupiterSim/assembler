import { BType } from '../base/btype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I bltu instruction. */
export class BLTU extends BType {
  /**
   * Creates a new RISC-V RV32I bltu instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rs1: number, rs2: number, imm: Expression) {
    super(debugInfo, 'bltu', 0x63, 0x6, rs1, rs2, imm);
  }
}
