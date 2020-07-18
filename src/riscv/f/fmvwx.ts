import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fmv.w.x instruction. */
export class FMVWX extends RType {
  /**
   * Creates a new RISC-V RV32F fmv.w.x instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fmv.w.x', 0x53, rd, 0x0, rs1, 0, 0x78);
  }
}
