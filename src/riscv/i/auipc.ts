import { UType } from '../base/utype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32I auipc instruction. */
export class AUIPC extends UType {
  /**
   * Creates a new RISC-V RV32I auipc instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param imm       - Immediate expression.
   */
  constructor(debugInfo: DebugInfo, rd: number, imm: Expression) {
    super(debugInfo, 'auipc', 0x17, rd, imm);
  }
}
