import { SType } from '../base/stype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I sw instruction. */
export class SW extends SType {
  /**
   * Creates a new RISC-V RV32I sw instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rs1: number, rs2: number, imm: Expression) {
    super(debugInfo, 'sw', 0x23, 0x2, rs1, rs2, imm);
  }
}
