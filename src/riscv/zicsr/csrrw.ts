import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32Zicsr csrrw instruction. */
export class CSRRW extends IType {
  /**
   * Creates a new RISC-V RV32Zicsr csrrw instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param csr       - Control and status register.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, csr: Expression) {
    super(debugInfo, 'csrrw', 0x73, rd, 0x1, rs1, csr);
  }
}
