import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I slti instruction. */
export class SLTI extends IType {
  /**
   * Creates a new RISC-V RV32I slti instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, imm: Expression) {
    super(debugInfo, 'slti', 0x13, rd, 0x2, rs1, imm);
  }
}
