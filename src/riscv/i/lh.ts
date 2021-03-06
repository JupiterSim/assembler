import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I lh instruction. */
export class LH extends IType {
  /**
   * Creates a new RISC-V RV32I lh instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, imm: Expression) {
    super(debugInfo, 'lh', 0x3, rd, 0x1, rs1, imm);
  }
}
