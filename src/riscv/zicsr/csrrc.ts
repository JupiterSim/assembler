import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32Zicsr csrrc instruction. */
export class CSRRC extends IType {
  /**
   * Creates a new RISC-V RV32Zicsr csrrc instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param csr       - Control and status register.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, csr: Expression) {
    super(debugInfo, 'csrrc', 0x73, rd, 0x3, rs1, csr);
  }
}
