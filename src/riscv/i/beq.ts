import { BType } from '../base/btype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I beq instruction. */
export class BEQ extends BType {
  /**
   * Creates a new RISC-V RV32I beq instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rs1: number, rs2: number, imm: Expression) {
    super(debugInfo, 'beq', 0x63, 0x0, rs1, rs2, imm);
  }
}
