import { SType } from '../base/stype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I sb instruction. */
export class SB extends SType {
  /**
   * Creates a new RISC-V RV32I sb instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rs1: number, rs2: number, imm: Expression) {
    super(debugInfo, 'sb', 0x23, 0x0, rs1, rs2, imm);
  }
}
