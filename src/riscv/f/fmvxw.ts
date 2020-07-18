import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fmv.x.w instruction. */
export class FMVXW extends RType {
  /**
   * Creates a new RISC-V RV32F fmv.x.w instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fmv.x.w', 0x53, rd, 0x0, rs1, 0, 0x70);
  }
}
