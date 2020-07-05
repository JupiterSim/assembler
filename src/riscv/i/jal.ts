import { JType } from '../base/jtype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I jal instruction. */
export class JAL extends JType {
  /**
   * Creates a new RISC-V RV32I jal instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rd: number, imm: Expression) {
    super(debugInfo, 'jal', 0x6f, rd, imm);
  }
}
