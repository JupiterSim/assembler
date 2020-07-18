import { SType } from '../base/stype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32D fsd instruction. */
export class FSD extends SType {
  /**
   * Creates a new RISC-V RV32D fsd instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rs1: number, rs2: number, imm: Expression) {
    super(debugInfo, 'fsd', 0x27, 0x3, rs1, rs2, imm);
  }
}
