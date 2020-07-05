import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I sltiu instruction. */
export class SLTIU extends IType {
  /**
   * Creates a new RISC-V RV32I sltiu instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, imm: Expression) {
    super(debugInfo, 'sltiu', 0x13, rd, 0x3, rs1, imm);
  }
}
