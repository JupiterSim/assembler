import { IType } from '../base/itype';
import { DebugInfo } from '../../types';
import { Expression } from '../../expr';

/** RISC-V RV32Zicsr csrrsi instruction. */
export class CSRRSI extends IType {
  /**
   * Creates a new RISC-V RV32Zicsr csrrsi instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param uimm      - Unsigned immediate.
   * @param csr       - Control and status register.
   */
  constructor(debugInfo: DebugInfo, rd: number, uimm: number, csr: Expression) {
    super(debugInfo, 'csrrsi', 0x73, rd, 0x6, uimm, csr);
  }
}
