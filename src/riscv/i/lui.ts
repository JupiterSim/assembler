import { UType } from '../base/utype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I lui instruction. */
export class LUI extends UType {
  /**
   * Creates a new RISC-V RV32I lui instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rd: number, imm: Expression) {
    super(debugInfo, 'lui', 0x37, rd, imm);
  }
}
